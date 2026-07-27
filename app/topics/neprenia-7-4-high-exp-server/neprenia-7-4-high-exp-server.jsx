import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-high-exp-server');
}

export default function Neprenia74HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-high-exp-server" />;
}

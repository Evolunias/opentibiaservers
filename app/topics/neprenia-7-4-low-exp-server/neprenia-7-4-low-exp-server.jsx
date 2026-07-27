import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-4-low-exp-server');
}

export default function Neprenia74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-4-low-exp-server" />;
}

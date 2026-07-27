import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-6-high-exp-server');
}

export default function Neprenia86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-6-high-exp-server" />;
}

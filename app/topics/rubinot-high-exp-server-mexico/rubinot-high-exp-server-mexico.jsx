import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-mexico');
}

export default function RubinotHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-mexico" />;
}

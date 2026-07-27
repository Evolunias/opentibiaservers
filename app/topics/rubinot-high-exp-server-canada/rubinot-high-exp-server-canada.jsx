import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-canada');
}

export default function RubinotHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-canada" />;
}

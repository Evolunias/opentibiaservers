import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-canada');
}

export default function RubinotFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-canada" />;
}

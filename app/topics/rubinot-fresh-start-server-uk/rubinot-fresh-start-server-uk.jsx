import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-uk');
}

export default function RubinotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-uk" />;
}

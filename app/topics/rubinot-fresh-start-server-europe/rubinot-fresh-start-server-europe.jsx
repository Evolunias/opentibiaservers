import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-europe');
}

export default function RubinotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-europe" />;
}

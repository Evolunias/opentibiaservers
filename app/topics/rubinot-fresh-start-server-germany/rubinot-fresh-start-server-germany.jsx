import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-germany');
}

export default function RubinotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-germany" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-brazil');
}

export default function RubinotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-brazil" />;
}

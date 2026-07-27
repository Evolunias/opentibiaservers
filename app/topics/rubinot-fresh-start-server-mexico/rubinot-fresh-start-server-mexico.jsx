import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-mexico');
}

export default function RubinotFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-mexico" />;
}

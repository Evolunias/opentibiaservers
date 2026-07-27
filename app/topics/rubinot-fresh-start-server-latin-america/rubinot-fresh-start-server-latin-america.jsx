import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-fresh-start-server-latin-america');
}

export default function RubinotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-fresh-start-server-latin-america" />;
}

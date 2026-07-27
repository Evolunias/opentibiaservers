import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-fresh-start-server-north-america');
}

export default function MarolaotFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-fresh-start-server-north-america" />;
}

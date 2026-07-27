import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp');
}

export default function MarolaotPvpKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp" />;
}

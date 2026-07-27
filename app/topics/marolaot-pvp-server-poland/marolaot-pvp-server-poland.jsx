import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-poland');
}

export default function MarolaotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-poland" />;
}

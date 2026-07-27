import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-poland');
}

export default function MarolaotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-poland" />;
}

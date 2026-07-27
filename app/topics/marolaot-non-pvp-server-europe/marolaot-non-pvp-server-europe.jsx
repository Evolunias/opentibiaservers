import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-non-pvp-server-europe');
}

export default function MarolaotNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-non-pvp-server-europe" />;
}

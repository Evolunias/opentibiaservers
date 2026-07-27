import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-server-europe');
}

export default function MarolaotPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-server-europe" />;
}

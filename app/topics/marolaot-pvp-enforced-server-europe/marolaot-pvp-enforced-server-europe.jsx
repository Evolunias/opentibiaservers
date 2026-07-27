import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-enforced-server-europe');
}

export default function MarolaotPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-enforced-server-europe" />;
}

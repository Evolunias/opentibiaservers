import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-marolaot-server');
}

export default function PvpEnforcedMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-marolaot-server" />;
}

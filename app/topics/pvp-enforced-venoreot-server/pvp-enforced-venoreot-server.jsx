import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-venoreot-server');
}

export default function PvpEnforcedVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-venoreot-server" />;
}

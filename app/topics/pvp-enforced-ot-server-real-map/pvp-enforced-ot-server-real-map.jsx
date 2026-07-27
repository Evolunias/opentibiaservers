import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ot-server-real-map');
}

export default function PvpEnforcedOtServerRealMapKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ot-server-real-map" />;
}

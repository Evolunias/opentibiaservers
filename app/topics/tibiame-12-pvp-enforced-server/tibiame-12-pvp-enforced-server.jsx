import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-pvp-enforced-server');
}

export default function Tibiame12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-pvp-enforced-server" />;
}

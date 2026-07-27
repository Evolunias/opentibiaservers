import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-pvp-enforced-server');
}

export default function Tibiame100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-pvp-enforced-server" />;
}

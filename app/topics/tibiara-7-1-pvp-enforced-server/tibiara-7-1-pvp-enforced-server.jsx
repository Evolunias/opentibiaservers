import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-pvp-enforced-server');
}

export default function Tibiara71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-pvp-enforced-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-pvp-enforced-server');
}

export default function Tibiara12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-pvp-enforced-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-pvp-enforced-server');
}

export default function Tibiara14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-pvp-enforced-server" />;
}

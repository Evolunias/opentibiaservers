import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-server');
}

export default function Tibia14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-enforced-server');
}

export default function Tibia772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-enforced-server" />;
}

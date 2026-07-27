import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-server');
}

export default function Tibia74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-server" />;
}

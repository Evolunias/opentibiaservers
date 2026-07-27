import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-launch');
}

export default function Tibia12PvpEnforcedLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-launch" />;
}

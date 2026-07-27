import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-launch');
}

export default function Tibia11PvpEnforcedLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-launch" />;
}

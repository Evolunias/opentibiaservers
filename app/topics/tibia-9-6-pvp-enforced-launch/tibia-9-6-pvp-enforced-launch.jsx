import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-enforced-launch');
}

export default function Tibia96PvpEnforcedLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-enforced-launch" />;
}

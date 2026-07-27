import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-launch');
}

export default function Tibia14PvpEnforcedLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-launch" />;
}

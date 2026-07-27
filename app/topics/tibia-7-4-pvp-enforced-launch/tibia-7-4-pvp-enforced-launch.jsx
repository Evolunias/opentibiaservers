import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-launch');
}

export default function Tibia74PvpEnforcedLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-launch" />;
}

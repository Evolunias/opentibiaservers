import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-enforced-launch');
}

export default function Tibia84PvpEnforcedLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-enforced-launch" />;
}

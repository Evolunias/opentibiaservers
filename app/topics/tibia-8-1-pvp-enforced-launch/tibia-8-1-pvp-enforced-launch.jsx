import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-enforced-launch');
}

export default function Tibia81PvpEnforcedLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-enforced-launch" />;
}

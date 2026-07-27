import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-launch');
}

export default function Tibia12PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-launch" />;
}

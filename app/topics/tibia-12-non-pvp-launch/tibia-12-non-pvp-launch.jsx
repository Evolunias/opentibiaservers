import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-launch');
}

export default function Tibia12NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-launch" />;
}

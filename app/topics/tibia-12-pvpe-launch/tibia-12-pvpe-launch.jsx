import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvpe-launch');
}

export default function Tibia12PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvpe-launch" />;
}

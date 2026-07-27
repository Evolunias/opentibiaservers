import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvpe-launch');
}

export default function Tibia11PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvpe-launch" />;
}

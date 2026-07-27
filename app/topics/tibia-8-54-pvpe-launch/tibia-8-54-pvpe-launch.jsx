import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvpe-launch');
}

export default function Tibia854PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvpe-launch" />;
}

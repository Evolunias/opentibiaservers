import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvpe-launch');
}

export default function Tibia15PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvpe-launch" />;
}

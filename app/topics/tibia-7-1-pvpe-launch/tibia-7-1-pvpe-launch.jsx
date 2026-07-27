import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvpe-launch');
}

export default function Tibia71PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvpe-launch" />;
}

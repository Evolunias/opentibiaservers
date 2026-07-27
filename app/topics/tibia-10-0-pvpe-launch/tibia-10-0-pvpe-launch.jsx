import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvpe-launch');
}

export default function Tibia100PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvpe-launch" />;
}

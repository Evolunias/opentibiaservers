import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvpe-launch');
}

export default function Tibia96PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvpe-launch" />;
}

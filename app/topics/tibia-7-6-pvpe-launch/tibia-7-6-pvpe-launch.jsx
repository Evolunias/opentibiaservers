import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvpe-launch');
}

export default function Tibia76PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvpe-launch" />;
}

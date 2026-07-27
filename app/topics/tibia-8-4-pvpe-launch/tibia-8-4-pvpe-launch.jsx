import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvpe-launch');
}

export default function Tibia84PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvpe-launch" />;
}

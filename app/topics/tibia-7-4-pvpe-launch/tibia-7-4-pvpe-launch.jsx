import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvpe-launch');
}

export default function Tibia74PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvpe-launch" />;
}

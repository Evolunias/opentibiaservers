import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvpe-launch');
}

export default function Tibia13PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvpe-launch" />;
}

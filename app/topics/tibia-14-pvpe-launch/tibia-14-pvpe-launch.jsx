import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvpe-launch');
}

export default function Tibia14PvpeLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvpe-launch" />;
}

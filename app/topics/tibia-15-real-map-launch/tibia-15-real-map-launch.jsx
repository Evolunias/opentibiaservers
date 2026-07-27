import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-launch');
}

export default function Tibia15RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-launch" />;
}

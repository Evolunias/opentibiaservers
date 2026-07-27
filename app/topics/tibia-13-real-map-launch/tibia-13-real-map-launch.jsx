import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-launch');
}

export default function Tibia13RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-launch" />;
}

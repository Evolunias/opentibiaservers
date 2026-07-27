import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-real-map-launch');
}

export default function Tibia1098RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-real-map-launch" />;
}

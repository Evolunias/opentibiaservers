import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-launch');
}

export default function Tibia11RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-launch" />;
}

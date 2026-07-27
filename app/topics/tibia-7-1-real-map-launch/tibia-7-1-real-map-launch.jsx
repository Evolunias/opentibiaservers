import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-real-map-launch');
}

export default function Tibia71RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-real-map-launch" />;
}

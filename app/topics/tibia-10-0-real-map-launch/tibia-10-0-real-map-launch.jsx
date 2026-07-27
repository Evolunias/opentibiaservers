import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-real-map-launch');
}

export default function Tibia100RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-real-map-launch" />;
}

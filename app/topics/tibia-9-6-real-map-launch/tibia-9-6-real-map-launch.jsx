import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-launch');
}

export default function Tibia96RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-launch" />;
}

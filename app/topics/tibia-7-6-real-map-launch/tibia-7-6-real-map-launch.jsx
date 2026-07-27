import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-real-map-launch');
}

export default function Tibia76RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-real-map-launch" />;
}

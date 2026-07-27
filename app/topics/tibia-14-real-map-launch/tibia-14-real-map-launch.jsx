import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-launch');
}

export default function Tibia14RealMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-launch" />;
}

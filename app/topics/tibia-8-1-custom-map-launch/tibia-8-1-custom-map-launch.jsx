import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-launch');
}

export default function Tibia81CustomMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-launch" />;
}

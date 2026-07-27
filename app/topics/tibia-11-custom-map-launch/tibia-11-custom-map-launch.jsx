import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-launch');
}

export default function Tibia11CustomMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-launch" />;
}

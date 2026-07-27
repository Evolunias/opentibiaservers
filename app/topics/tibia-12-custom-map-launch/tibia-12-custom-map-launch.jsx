import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-launch');
}

export default function Tibia12CustomMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-launch" />;
}

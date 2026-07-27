import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-custom-map-launch');
}

export default function Tibia74CustomMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-custom-map-launch" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-custom-map-launch');
}

export default function Tibia854CustomMapLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-custom-map-launch" />;
}

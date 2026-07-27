import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-status');
}

export default function Tibia96CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-status" />;
}

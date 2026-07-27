import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-custom-map-status');
}

export default function Tibia100CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-custom-map-status" />;
}

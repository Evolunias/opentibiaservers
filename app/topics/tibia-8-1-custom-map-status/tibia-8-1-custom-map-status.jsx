import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-status');
}

export default function Tibia81CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-status" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-custom-map-status');
}

export default function Tibia86CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-custom-map-status" />;
}

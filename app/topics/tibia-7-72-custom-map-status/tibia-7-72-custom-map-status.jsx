import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-custom-map-status');
}

export default function Tibia772CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-custom-map-status" />;
}

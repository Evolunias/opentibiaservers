import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-status');
}

export default function Tibia11CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-status" />;
}

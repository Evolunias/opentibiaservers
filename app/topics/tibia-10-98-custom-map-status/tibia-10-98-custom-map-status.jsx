import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-custom-map-status');
}

export default function Tibia1098CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-custom-map-status" />;
}

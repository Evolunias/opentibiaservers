import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-status');
}

export default function Tibia14CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-status" />;
}

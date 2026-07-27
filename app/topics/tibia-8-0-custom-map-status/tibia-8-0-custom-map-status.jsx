import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-custom-map-status');
}

export default function Tibia80CustomMapStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-custom-map-status" />;
}

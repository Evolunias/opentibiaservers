import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map');
}

export default function Tibia13RealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map" />;
}

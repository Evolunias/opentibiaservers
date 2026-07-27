import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-real-map');
}

export default function Tibia81RealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-real-map" />;
}

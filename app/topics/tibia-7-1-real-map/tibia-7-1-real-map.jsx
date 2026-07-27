import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-real-map');
}

export default function Tibia71RealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-real-map" />;
}

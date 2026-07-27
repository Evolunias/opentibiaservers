import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map');
}

export default function Tibia12RealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map" />;
}

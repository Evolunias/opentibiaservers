import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map');
}

export default function Tibia11RealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map');
}

export default function Tibia96RealMapKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map" />;
}

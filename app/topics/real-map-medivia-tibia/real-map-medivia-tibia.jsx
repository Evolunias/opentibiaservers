import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-tibia');
}

export default function RealMapMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-tibia" />;
}

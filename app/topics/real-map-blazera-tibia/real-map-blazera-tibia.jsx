import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-tibia');
}

export default function RealMapBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-tibia" />;
}

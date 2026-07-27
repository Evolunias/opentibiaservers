import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-login');
}

export default function RealMapBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-login" />;
}

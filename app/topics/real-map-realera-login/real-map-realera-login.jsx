import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-login');
}

export default function RealMapRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-login" />;
}

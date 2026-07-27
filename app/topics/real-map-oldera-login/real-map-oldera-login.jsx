import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-login');
}

export default function RealMapOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-login" />;
}

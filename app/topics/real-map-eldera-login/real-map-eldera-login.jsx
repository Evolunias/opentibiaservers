import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-login');
}

export default function RealMapElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-login" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-cyntara-login');
}

export default function RealMapCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-cyntara-login" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-login');
}

export default function RealMapTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-login" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-login');
}

export default function RealMapTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-login" />;
}

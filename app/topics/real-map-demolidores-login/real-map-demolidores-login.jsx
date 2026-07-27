import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-login');
}

export default function RealMapDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-login" />;
}

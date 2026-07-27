import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-login');
}

export default function RealMapTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-login" />;
}

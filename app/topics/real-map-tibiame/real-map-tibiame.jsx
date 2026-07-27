import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame');
}

export default function RealMapTibiameKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame" />;
}

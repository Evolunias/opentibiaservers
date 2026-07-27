import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map');
}

export default function TibiameRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map" />;
}

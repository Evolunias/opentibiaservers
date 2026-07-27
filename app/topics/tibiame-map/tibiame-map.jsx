import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-map');
}

export default function TibiameMapKeywordPage() {
  return <StaticKeywordPage slug="tibiame-map" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-real-map');
}

export default function KasteriaRealMapKeywordPage() {
  return <StaticKeywordPage slug="kasteria-real-map" />;
}

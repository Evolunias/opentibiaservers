import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-real-map');
}

export default function TibiantisRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-real-map" />;
}

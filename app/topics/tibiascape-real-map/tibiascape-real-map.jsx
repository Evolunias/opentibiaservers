import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map');
}

export default function TibiascapeRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map" />;
}

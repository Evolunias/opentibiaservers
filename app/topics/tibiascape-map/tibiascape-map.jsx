import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-map');
}

export default function TibiascapeMapKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-map" />;
}

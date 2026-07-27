import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-poland');
}

export default function TibiascapeRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-poland" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-server-poland');
}

export default function TibiascapeCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-server-poland" />;
}

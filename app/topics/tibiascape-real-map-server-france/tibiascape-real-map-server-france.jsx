import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-server-france');
}

export default function TibiascapeRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-server-france" />;
}

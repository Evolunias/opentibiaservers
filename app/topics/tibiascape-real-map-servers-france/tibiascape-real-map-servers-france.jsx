import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-real-map-servers-france');
}

export default function TibiascapeRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-real-map-servers-france" />;
}

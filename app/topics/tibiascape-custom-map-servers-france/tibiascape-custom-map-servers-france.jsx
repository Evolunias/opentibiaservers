import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-custom-map-servers-france');
}

export default function TibiascapeCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-custom-map-servers-france" />;
}

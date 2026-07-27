import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-france');
}

export default function TibiantisCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-france" />;
}

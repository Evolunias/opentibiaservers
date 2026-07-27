import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-server-france');
}

export default function TibiantisCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-server-france" />;
}

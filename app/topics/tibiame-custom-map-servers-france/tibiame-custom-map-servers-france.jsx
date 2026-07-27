import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-france');
}

export default function TibiameCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-france" />;
}

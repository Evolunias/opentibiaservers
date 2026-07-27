import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-france');
}

export default function TibiameCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-france" />;
}

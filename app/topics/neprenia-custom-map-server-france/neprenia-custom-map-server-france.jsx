import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-server-france');
}

export default function NepreniaCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-server-france" />;
}

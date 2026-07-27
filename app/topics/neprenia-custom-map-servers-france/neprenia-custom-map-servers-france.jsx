import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-france');
}

export default function NepreniaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-france" />;
}

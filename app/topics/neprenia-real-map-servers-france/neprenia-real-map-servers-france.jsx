import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-france');
}

export default function NepreniaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-france" />;
}

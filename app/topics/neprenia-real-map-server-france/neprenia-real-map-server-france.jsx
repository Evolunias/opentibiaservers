import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-server-france');
}

export default function NepreniaRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-server-france" />;
}

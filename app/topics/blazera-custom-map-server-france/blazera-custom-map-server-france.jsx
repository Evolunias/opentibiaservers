import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-server-france');
}

export default function BlazeraCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-server-france" />;
}

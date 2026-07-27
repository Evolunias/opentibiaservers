import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-custom-map-servers-france');
}

export default function BlazeraCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-custom-map-servers-france" />;
}

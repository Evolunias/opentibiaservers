import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-servers-france');
}

export default function OtmadnessCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-servers-france" />;
}

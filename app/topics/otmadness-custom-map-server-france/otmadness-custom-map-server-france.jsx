import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-custom-map-server-france');
}

export default function OtmadnessCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-custom-map-server-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-real-map-servers-france');
}

export default function OtmadnessRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-real-map-servers-france" />;
}

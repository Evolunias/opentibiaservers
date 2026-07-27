import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-france');
}

export default function OtmadnessSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-france" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-uk');
}

export default function OtmadnessSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-uk" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-poland');
}

export default function OtmadnessSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-poland" />;
}

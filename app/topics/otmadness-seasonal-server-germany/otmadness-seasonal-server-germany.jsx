import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-germany');
}

export default function OtmadnessSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-germany" />;
}

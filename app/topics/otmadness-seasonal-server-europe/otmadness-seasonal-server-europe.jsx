import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-europe');
}

export default function OtmadnessSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-europe" />;
}

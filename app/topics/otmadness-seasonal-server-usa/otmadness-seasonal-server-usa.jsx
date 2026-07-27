import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-usa');
}

export default function OtmadnessSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-usa" />;
}

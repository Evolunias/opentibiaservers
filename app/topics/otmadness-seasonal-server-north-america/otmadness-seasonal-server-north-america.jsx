import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-north-america');
}

export default function OtmadnessSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-north-america" />;
}

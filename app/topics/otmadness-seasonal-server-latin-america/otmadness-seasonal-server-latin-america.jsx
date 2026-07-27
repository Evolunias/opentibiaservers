import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-latin-america');
}

export default function OtmadnessSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-latin-america" />;
}

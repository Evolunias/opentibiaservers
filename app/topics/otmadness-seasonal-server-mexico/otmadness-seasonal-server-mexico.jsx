import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-mexico');
}

export default function OtmadnessSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-mexico" />;
}

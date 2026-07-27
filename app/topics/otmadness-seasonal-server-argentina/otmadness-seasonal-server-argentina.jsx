import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-argentina');
}

export default function OtmadnessSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-argentina" />;
}

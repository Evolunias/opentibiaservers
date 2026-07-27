import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-seasonal-server-brazil');
}

export default function OtmadnessSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="otmadness-seasonal-server-brazil" />;
}

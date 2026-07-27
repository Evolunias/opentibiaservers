import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-otmadness-server');
}

export default function SeasonalOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-otmadness-server" />;
}

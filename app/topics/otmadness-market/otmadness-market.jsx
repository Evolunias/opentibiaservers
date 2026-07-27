import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-market');
}

export default function OtmadnessMarketKeywordPage() {
  return <StaticKeywordPage slug="otmadness-market" />;
}

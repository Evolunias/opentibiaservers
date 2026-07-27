import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-exp-rate');
}

export default function BaiakIlusionExpRateKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-exp-rate" />;
}

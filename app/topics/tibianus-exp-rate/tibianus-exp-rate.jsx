import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-exp-rate');
}

export default function TibianusExpRateKeywordPage() {
  return <StaticKeywordPage slug="tibianus-exp-rate" />;
}

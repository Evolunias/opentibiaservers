import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-exp-rate');
}

export default function OriginaltibiaExpRateKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-exp-rate" />;
}

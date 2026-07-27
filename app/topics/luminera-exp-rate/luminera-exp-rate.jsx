import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-exp-rate');
}

export default function LumineraExpRateKeywordPage() {
  return <StaticKeywordPage slug="luminera-exp-rate" />;
}

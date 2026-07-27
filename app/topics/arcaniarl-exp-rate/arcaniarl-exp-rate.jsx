import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-exp-rate');
}

export default function ArcaniarlExpRateKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-exp-rate" />;
}

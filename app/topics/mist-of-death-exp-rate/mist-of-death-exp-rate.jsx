import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-exp-rate');
}

export default function MistOfDeathExpRateKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-exp-rate" />;
}

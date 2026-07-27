import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-exp-rate');
}

export default function ThorniaExpRateKeywordPage() {
  return <StaticKeywordPage slug="thornia-exp-rate" />;
}

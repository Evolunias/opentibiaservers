import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-exp-rate');
}

export default function SerenityExpRateKeywordPage() {
  return <StaticKeywordPage slug="serenity-exp-rate" />;
}

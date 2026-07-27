import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-exp-rate');
}

export default function NepreniaExpRateKeywordPage() {
  return <StaticKeywordPage slug="neprenia-exp-rate" />;
}

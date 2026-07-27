import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-exp-rate');
}

export default function TibiaoriginsExpRateKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-exp-rate" />;
}

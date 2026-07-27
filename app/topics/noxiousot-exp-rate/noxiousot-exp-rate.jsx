import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-exp-rate');
}

export default function NoxiousotExpRateKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-exp-rate" />;
}

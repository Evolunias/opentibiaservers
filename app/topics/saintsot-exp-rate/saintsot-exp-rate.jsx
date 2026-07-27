import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-exp-rate');
}

export default function SaintsotExpRateKeywordPage() {
  return <StaticKeywordPage slug="saintsot-exp-rate" />;
}

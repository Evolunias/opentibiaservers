import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-ot');
}

export default function BestEternalOdysseyOtKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-ot" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-rules');
}

export default function BestEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-rules" />;
}

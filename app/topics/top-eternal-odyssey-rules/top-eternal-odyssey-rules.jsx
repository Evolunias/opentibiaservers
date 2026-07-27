import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-rules');
}

export default function TopEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-rules" />;
}

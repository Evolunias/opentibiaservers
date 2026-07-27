import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-rules');
}

export default function PopularEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-rules" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-rules');
}

export default function FreshStartEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-rules" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-rules');
}

export default function CurrentEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-rules" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-rules');
}

export default function NewEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-rules" />;
}

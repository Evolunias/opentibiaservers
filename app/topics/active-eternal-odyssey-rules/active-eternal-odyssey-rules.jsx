import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-eternal-odyssey-rules');
}

export default function ActiveEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="active-eternal-odyssey-rules" />;
}

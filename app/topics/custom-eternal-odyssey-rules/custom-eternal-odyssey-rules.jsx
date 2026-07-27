import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-rules');
}

export default function CustomEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-rules" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-madnessalive-rules');
}

export default function CurrentMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="current-madnessalive-rules" />;
}

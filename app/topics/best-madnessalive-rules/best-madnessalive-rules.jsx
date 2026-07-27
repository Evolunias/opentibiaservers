import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-madnessalive-rules');
}

export default function BestMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="best-madnessalive-rules" />;
}

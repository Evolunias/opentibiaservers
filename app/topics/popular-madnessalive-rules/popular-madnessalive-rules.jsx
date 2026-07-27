import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-madnessalive-rules');
}

export default function PopularMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-madnessalive-rules" />;
}

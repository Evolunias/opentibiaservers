import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-madnessalive-rules');
}

export default function TopMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="top-madnessalive-rules" />;
}

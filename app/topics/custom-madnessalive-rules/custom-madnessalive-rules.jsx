import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-madnessalive-rules');
}

export default function CustomMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-madnessalive-rules" />;
}

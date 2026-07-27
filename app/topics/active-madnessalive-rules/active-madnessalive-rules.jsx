import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-madnessalive-rules');
}

export default function ActiveMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="active-madnessalive-rules" />;
}

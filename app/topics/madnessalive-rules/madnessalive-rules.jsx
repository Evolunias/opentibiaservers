import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-rules');
}

export default function MadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-rules" />;
}

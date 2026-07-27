import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-madnessalive-rules');
}

export default function NewMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="new-madnessalive-rules" />;
}

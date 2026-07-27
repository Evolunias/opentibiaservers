import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-rules');
}

export default function NewOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-rules" />;
}

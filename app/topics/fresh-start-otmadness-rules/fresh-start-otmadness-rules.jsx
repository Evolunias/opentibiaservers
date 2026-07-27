import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-rules');
}

export default function FreshStartOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-rules" />;
}

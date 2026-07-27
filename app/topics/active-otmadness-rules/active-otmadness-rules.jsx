import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-rules');
}

export default function ActiveOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-rules" />;
}

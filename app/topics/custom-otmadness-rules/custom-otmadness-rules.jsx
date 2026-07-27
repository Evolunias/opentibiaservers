import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-rules');
}

export default function CustomOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-rules" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-rules');
}

export default function TopOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-rules" />;
}

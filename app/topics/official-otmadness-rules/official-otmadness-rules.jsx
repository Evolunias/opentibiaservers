import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-rules');
}

export default function OfficialOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-rules" />;
}

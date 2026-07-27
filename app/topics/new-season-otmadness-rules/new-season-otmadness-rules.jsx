import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-rules');
}

export default function NewSeasonOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-rules" />;
}

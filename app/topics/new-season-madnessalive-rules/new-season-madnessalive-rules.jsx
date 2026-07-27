import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-rules');
}

export default function NewSeasonMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-rules" />;
}

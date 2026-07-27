import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-rules');
}

export default function NewSeasonEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-rules" />;
}

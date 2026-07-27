import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-rules');
}

export default function NewSeasonBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-rules" />;
}

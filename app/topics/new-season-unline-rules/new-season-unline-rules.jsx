import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-rules');
}

export default function NewSeasonUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-rules" />;
}

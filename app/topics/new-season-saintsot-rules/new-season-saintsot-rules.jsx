import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-rules');
}

export default function NewSeasonSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-rules" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-rules');
}

export default function NewSeasonShadowcoresRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-rules" />;
}

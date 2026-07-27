import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-rules');
}

export default function NewSeasonAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-rules" />;
}

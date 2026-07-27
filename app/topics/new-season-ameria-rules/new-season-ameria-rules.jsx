import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-rules');
}

export default function NewSeasonAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-rules" />;
}

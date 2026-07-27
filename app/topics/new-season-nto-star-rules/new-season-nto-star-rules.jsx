import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-rules');
}

export default function NewSeasonNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-rules" />;
}

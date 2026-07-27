import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-rules');
}

export default function NewSeasonTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-rules" />;
}

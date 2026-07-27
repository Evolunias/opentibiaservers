import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-rules');
}

export default function NewSeasonClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-rules" />;
}

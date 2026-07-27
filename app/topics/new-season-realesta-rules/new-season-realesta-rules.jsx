import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-rules');
}

export default function NewSeasonRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-rules" />;
}

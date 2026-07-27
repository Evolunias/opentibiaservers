import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-rules');
}

export default function NewSeasonRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-rules" />;
}

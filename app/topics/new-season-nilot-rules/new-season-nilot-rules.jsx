import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-rules');
}

export default function NewSeasonNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-rules" />;
}

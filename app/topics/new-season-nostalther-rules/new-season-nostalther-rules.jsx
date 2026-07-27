import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-rules');
}

export default function NewSeasonNostaltherRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-rules" />;
}

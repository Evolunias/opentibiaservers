import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-rules');
}

export default function NewSeasonCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-rules" />;
}

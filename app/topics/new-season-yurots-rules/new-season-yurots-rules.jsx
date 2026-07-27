import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-rules');
}

export default function NewSeasonYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-rules" />;
}

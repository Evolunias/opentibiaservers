import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-rules');
}

export default function NewSeasonClassicusRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-rules" />;
}

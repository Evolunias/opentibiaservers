import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-rules');
}

export default function NewSeasonTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-rules" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-rules');
}

export default function NewSeasonAureraGlobalRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-rules" />;
}

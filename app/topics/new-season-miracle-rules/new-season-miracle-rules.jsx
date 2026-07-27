import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-miracle-rules');
}

export default function NewSeasonMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-miracle-rules" />;
}

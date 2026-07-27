import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-rules');
}

export default function NewSeasonArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-rules" />;
}

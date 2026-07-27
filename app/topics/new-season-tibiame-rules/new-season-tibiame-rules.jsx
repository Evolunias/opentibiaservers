import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-rules');
}

export default function NewSeasonTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-rules" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-rules');
}

export default function NewSeasonOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-rules" />;
}

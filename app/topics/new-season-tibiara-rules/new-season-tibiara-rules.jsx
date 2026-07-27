import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-rules');
}

export default function NewSeasonTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-rules" />;
}

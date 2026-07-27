import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-dura-online-rules');
}

export default function NewSeasonDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-dura-online-rules" />;
}

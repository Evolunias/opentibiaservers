import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-online');
}

export default function NewSeasonEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-online" />;
}

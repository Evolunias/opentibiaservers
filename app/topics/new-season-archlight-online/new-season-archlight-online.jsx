import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-online');
}

export default function NewSeasonArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-online" />;
}

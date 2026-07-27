import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-online');
}

export default function NewSeasonTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-online" />;
}

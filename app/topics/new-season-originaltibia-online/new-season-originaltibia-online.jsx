import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-originaltibia-online');
}

export default function NewSeasonOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-originaltibia-online" />;
}

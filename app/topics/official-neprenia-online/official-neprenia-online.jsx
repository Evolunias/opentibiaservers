import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-online');
}

export default function OfficialNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-online" />;
}

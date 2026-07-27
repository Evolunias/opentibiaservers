import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-online');
}

export default function OfficialNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-online" />;
}

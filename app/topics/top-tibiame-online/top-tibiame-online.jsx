import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiame-online');
}

export default function TopTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-tibiame-online" />;
}

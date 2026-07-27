import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiame-online');
}

export default function PopularTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiame-online" />;
}

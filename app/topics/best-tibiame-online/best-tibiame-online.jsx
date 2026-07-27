import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiame-online');
}

export default function BestTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-tibiame-online" />;
}

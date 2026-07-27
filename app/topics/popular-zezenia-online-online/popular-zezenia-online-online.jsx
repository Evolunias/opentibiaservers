import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online-online');
}

export default function PopularZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online-online" />;
}

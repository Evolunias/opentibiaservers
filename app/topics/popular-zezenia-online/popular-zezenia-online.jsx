import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zezenia-online');
}

export default function PopularZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-zezenia-online" />;
}

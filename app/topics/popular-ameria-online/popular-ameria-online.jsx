import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-online');
}

export default function PopularAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-online');
}

export default function PopularKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-online" />;
}

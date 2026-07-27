import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-online');
}

export default function PopularNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-online" />;
}

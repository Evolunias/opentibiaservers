import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-online');
}

export default function TopNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-online" />;
}

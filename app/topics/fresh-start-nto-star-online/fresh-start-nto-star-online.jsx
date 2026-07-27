import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-online');
}

export default function FreshStartNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-online" />;
}

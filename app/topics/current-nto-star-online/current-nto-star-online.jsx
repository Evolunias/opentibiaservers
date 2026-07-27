import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-online');
}

export default function CurrentNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-online" />;
}

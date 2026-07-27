import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-online');
}

export default function ActiveNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-online" />;
}

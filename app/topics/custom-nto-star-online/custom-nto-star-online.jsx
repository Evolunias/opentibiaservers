import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-online');
}

export default function CustomNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-online" />;
}

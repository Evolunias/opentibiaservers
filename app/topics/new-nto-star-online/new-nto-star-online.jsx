import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-online');
}

export default function NewNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-online" />;
}

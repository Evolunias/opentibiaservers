import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-online');
}

export default function NtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="nto-star-online" />;
}

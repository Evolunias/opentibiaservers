import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-online');
}

export default function PopularYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-online" />;
}

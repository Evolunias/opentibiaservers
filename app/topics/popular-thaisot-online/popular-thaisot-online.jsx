import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-online');
}

export default function PopularThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-online" />;
}

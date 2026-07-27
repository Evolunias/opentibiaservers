import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-online');
}

export default function PopularRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-online" />;
}

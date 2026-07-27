import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-online');
}

export default function PopularImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-online" />;
}

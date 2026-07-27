import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-online');
}

export default function PopularAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-online');
}

export default function PopularDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-online" />;
}

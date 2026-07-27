import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-online');
}

export default function TopDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-online" />;
}

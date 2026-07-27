import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-online');
}

export default function CurrentDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-online');
}

export default function FreshStartDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-online" />;
}

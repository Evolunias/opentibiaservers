import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-online');
}

export default function FreshStartNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-online" />;
}

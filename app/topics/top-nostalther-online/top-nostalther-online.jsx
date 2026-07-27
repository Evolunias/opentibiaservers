import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-online');
}

export default function TopNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-online" />;
}

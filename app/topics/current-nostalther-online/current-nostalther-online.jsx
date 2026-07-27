import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-online');
}

export default function CurrentNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-online" />;
}

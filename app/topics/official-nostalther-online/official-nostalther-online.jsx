import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-online');
}

export default function OfficialNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-online" />;
}

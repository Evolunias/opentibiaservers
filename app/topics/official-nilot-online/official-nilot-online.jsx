import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-online');
}

export default function OfficialNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-online" />;
}

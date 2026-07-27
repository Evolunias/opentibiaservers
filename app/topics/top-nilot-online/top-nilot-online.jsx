import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-online');
}

export default function TopNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-online');
}

export default function CurrentNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-online" />;
}

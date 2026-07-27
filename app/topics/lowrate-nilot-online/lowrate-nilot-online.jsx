import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-online');
}

export default function LowrateNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-online" />;
}

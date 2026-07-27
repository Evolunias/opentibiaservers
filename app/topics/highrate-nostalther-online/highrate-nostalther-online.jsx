import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-online');
}

export default function HighrateNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-online');
}

export default function LowrateNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-online" />;
}

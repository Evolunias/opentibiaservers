import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-online');
}

export default function LowrateCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-online" />;
}

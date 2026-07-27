import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-online');
}

export default function LowrateRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-online" />;
}

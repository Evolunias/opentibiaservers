import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-online');
}

export default function LowrateRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-online" />;
}

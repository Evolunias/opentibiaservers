import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-online');
}

export default function LowrateNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-online" />;
}

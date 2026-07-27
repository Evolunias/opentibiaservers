import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-online');
}

export default function TopNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-online" />;
}

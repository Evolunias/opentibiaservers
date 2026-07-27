import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-online');
}

export default function CurrentNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-online" />;
}

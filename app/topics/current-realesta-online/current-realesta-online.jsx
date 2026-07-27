import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-online');
}

export default function CurrentRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-online" />;
}

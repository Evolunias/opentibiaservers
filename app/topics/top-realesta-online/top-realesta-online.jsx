import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-online');
}

export default function TopRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-online" />;
}

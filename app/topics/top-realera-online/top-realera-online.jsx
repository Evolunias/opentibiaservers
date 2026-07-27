import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-online');
}

export default function TopRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-realera-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-online');
}

export default function CurrentRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-realera-online" />;
}

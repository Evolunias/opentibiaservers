import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-online');
}

export default function CurrentBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-online');
}

export default function LowrateBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-online" />;
}

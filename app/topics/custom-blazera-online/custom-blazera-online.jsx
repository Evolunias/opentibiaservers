import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-blazera-online');
}

export default function CustomBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-blazera-online" />;
}

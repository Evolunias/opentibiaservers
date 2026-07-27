import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-blazera-online');
}

export default function NewBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-blazera-online" />;
}

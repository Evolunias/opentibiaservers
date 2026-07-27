import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('isara-online');
}

export default function IsaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="isara-online" />;
}

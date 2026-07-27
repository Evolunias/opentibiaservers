import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-online');
}

export default function OfficialCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-online" />;
}

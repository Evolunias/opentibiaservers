import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-online');
}

export default function NoResetCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-online" />;
}

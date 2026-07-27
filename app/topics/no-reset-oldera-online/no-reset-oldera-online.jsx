import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-online');
}

export default function NoResetOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-online" />;
}

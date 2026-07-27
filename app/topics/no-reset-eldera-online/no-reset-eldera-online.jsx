import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-online');
}

export default function NoResetElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-online');
}

export default function NoResetOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-online');
}

export default function NoResetRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-online');
}

export default function NoResetRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-online" />;
}

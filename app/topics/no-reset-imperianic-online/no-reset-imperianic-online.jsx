import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-online');
}

export default function NoResetImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-online" />;
}

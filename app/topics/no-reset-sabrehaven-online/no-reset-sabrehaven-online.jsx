import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-online');
}

export default function NoResetSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-online" />;
}

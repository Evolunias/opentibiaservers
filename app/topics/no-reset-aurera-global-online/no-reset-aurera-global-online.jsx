import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-online');
}

export default function NoResetAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-online" />;
}

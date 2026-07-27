import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-online');
}

export default function NoResetMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-online" />;
}

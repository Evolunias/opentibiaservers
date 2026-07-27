import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-online');
}

export default function NoResetCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-online" />;
}

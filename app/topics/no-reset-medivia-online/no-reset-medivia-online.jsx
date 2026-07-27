import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-medivia-online');
}

export default function NoResetMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-medivia-online" />;
}

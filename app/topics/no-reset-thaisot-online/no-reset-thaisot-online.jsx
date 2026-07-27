import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-online');
}

export default function NoResetThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-online" />;
}

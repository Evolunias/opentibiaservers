import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-online');
}

export default function NoResetYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-online" />;
}

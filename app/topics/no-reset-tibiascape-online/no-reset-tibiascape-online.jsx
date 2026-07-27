import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-online');
}

export default function NoResetTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-online" />;
}

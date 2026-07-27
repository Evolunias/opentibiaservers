import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibianus-online');
}

export default function NoResetTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibianus-online" />;
}

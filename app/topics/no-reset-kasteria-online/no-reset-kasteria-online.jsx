import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-online');
}

export default function NoResetKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-online" />;
}

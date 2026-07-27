import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-neprenia-online');
}

export default function NoResetNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-neprenia-online" />;
}

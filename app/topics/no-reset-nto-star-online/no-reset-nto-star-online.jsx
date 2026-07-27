import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-online');
}

export default function NoResetNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-online" />;
}

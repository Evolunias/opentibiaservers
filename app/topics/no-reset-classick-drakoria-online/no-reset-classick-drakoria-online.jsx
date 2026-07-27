import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-online');
}

export default function NoResetClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-online" />;
}

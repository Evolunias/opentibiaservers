import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-online');
}

export default function NoResetAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-online" />;
}

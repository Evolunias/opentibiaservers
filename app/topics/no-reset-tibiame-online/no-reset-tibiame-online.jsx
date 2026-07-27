import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-online');
}

export default function NoResetTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-online');
}

export default function ActiveTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-online" />;
}

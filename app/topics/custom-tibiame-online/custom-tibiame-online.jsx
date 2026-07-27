import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-online');
}

export default function CustomTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-online" />;
}

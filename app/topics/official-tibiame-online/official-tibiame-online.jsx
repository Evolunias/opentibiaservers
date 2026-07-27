import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-online');
}

export default function OfficialTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-online" />;
}

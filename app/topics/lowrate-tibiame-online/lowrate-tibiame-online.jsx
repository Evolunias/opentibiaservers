import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-online');
}

export default function LowrateTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-online" />;
}

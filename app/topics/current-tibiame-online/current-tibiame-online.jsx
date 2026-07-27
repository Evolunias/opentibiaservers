import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-online');
}

export default function CurrentTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-online" />;
}

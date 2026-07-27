import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiame-online');
}

export default function FreshStartTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiame-online" />;
}

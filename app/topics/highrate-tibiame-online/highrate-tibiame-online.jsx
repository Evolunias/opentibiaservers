import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiame-online');
}

export default function HighrateTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiame-online" />;
}

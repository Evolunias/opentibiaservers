import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-online');
}

export default function TibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiame-online" />;
}

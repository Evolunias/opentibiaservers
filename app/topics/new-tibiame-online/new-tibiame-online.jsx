import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-online');
}

export default function NewTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-online');
}

export default function OfficialZezeniaOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-online" />;
}

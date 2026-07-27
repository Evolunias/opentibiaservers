import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online');
}

export default function OfficialZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online" />;
}

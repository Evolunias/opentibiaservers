import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-online');
}

export default function OfficialAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-online" />;
}

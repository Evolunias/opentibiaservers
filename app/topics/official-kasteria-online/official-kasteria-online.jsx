import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-online');
}

export default function OfficialKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-online');
}

export default function OfficialTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-online" />;
}

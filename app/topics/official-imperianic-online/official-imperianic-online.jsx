import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-imperianic-online');
}

export default function OfficialImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-imperianic-online" />;
}

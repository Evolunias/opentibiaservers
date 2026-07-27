import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-online');
}

export default function OfficialRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-online" />;
}

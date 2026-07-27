import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-online');
}

export default function OfficialThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-online" />;
}

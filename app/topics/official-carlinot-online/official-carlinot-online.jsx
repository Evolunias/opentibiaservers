import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-online');
}

export default function OfficialCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-online" />;
}

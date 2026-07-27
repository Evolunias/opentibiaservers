import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-online');
}

export default function OfficialSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-online" />;
}

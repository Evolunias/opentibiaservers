import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-online');
}

export default function OfficialNoxiousotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-online" />;
}

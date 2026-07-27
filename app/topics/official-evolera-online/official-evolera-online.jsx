import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-online');
}

export default function OfficialEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-online" />;
}

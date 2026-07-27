import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-online');
}

export default function OfficialZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-online" />;
}

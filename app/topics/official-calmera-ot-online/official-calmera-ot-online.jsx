import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-online');
}

export default function OfficialCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-online" />;
}

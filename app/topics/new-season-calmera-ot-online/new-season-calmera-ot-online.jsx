import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-online');
}

export default function NewSeasonCalmeraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-online" />;
}

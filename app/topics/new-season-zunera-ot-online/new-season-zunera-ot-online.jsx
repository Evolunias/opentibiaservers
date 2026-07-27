import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-online');
}

export default function NewSeasonZuneraOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-online');
}

export default function NewSeasonHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-online" />;
}

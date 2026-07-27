import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-otmadness-online');
}

export default function NewSeasonOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-otmadness-online" />;
}

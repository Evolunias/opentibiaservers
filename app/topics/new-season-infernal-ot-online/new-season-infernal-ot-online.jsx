import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-infernal-ot-online');
}

export default function NewSeasonInfernalOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-infernal-ot-online" />;
}

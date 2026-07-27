import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-online');
}

export default function NewSeasonMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-online" />;
}

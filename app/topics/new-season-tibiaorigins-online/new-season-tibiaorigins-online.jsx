import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-online');
}

export default function NewSeasonTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-online" />;
}

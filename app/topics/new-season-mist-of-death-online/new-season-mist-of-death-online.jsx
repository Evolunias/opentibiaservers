import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-online');
}

export default function NewSeasonMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-online" />;
}

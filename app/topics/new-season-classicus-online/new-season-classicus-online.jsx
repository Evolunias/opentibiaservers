import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-online');
}

export default function NewSeasonClassicusOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-online" />;
}

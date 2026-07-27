import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-online');
}

export default function NewSeasonTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-online" />;
}

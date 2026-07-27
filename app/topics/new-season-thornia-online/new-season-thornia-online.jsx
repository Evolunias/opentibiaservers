import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-online');
}

export default function NewSeasonThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-online" />;
}

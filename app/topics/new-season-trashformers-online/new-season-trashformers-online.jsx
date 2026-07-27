import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-online');
}

export default function NewSeasonTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-online" />;
}

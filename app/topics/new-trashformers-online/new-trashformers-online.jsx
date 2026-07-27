import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-online');
}

export default function NewTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-online" />;
}

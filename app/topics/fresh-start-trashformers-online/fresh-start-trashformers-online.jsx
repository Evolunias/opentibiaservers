import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-online');
}

export default function FreshStartTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-online" />;
}

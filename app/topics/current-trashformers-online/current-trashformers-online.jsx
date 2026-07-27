import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-online');
}

export default function CurrentTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-online" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-online');
}

export default function TopTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-online" />;
}

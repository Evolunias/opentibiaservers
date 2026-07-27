import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-online');
}

export default function BestTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-online" />;
}

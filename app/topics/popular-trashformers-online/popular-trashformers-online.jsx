import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-online');
}

export default function PopularTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-online" />;
}

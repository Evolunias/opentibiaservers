import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-online');
}

export default function ActiveTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-online" />;
}

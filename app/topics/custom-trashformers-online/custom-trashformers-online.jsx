import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-online');
}

export default function CustomTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-online" />;
}

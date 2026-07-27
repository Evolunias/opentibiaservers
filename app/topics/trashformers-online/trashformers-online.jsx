import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-online');
}

export default function TrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="trashformers-online" />;
}

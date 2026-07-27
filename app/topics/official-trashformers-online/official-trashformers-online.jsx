import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-online');
}

export default function OfficialTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-online" />;
}

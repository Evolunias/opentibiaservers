import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-online');
}

export default function OldSchoolTrashformersOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-online" />;
}

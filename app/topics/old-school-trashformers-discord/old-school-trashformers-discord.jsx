import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-discord');
}

export default function OldSchoolTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-discord" />;
}

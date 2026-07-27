import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-discord');
}

export default function NewSeasonTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-discord" />;
}

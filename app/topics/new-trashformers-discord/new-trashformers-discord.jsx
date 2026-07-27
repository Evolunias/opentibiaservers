import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-discord');
}

export default function NewTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-discord" />;
}

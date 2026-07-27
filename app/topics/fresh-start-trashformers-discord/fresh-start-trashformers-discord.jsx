import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-discord');
}

export default function FreshStartTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-discord" />;
}

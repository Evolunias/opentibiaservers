import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-discord');
}

export default function CurrentTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-discord" />;
}

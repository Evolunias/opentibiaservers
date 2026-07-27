import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-discord');
}

export default function TopTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-discord" />;
}

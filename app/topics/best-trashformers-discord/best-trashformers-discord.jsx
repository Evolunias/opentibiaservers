import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-discord');
}

export default function BestTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-discord" />;
}

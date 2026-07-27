import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-discord');
}

export default function PopularTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-discord" />;
}

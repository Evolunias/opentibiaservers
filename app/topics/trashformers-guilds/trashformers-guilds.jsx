import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-guilds');
}

export default function TrashformersGuildsKeywordPage() {
  return <StaticKeywordPage slug="trashformers-guilds" />;
}

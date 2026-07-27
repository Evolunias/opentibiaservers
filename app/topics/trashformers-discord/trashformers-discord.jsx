import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-discord');
}

export default function TrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="trashformers-discord" />;
}

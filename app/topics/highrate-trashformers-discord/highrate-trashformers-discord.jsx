import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-discord');
}

export default function HighrateTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-discord');
}

export default function LowrateTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-discord" />;
}

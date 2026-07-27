import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-discord');
}

export default function CustomTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-discord" />;
}

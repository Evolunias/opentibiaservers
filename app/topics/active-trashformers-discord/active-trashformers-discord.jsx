import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-discord');
}

export default function ActiveTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-discord" />;
}

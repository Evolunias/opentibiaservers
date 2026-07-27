import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-discord');
}

export default function NoResetTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-discord" />;
}

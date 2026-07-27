import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-discord');
}

export default function OfficialTrashformersDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-discord" />;
}

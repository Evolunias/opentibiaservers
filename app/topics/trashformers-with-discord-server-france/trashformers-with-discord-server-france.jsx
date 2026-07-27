import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-discord-server-france');
}

export default function TrashformersWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-discord-server-france" />;
}

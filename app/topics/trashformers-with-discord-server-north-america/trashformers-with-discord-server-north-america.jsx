import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-discord-server-north-america');
}

export default function TrashformersWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-discord-server-north-america" />;
}

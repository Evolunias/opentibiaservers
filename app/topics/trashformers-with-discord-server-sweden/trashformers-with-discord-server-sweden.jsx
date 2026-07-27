import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-discord-server-sweden');
}

export default function TrashformersWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-discord-server-sweden" />;
}

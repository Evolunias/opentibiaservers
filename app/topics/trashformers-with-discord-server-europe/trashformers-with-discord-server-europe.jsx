import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-discord-server-europe');
}

export default function TrashformersWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-discord-server-europe" />;
}

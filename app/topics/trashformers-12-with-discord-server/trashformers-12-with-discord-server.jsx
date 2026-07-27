import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-12-with-discord-server');
}

export default function Trashformers12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-12-with-discord-server" />;
}

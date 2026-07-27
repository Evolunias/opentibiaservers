import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-11-with-discord-server');
}

export default function Trashformers11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-11-with-discord-server" />;
}

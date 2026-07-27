import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-15-with-discord-server');
}

export default function Trashformers15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-15-with-discord-server" />;
}

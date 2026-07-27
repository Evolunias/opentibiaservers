import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-with-discord-server');
}

export default function Nostalther13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-with-discord-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-with-discord-server');
}

export default function Nostalther71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-with-discord-server" />;
}

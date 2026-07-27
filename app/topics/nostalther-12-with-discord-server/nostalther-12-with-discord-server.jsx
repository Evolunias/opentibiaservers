import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-12-with-discord-server');
}

export default function Nostalther12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-12-with-discord-server" />;
}

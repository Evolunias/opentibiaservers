import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-with-discord-server');
}

export default function Nostalther100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-with-discord-server" />;
}

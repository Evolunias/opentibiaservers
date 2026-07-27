import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-with-discord-server');
}

export default function Nostalther14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-with-discord-server" />;
}

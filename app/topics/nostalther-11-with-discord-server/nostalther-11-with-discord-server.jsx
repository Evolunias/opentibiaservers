import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-with-discord-server');
}

export default function Nostalther11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-with-discord-server" />;
}

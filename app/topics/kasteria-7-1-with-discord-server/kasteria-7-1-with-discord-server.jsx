import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-with-discord-server');
}

export default function Kasteria71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-with-discord-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-with-discord-server');
}

export default function Kasteria13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-with-discord-server" />;
}

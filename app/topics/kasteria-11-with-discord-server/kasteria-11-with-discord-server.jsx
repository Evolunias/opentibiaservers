import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-with-discord-server');
}

export default function Kasteria11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-with-discord-server" />;
}

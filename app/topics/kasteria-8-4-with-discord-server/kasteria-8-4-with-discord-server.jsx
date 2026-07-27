import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-with-discord-server');
}

export default function Kasteria84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-with-discord-server" />;
}

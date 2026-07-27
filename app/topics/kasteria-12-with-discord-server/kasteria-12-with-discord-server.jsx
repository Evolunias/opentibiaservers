import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-with-discord-server');
}

export default function Kasteria12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-with-discord-server" />;
}

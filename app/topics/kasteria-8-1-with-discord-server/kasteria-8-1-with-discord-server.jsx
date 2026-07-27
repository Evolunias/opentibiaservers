import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-with-discord-server');
}

export default function Kasteria81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-with-discord-server" />;
}

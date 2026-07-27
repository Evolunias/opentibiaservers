import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-with-discord-server');
}

export default function Kasteria96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-with-discord-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-with-discord-server');
}

export default function Kasteria86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-with-discord-server" />;
}

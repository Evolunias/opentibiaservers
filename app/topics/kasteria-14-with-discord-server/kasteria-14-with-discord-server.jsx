import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-with-discord-server');
}

export default function Kasteria14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-with-discord-server" />;
}

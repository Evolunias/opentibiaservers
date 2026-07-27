import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-with-discord-server');
}

export default function Tibiantis13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-with-discord-server" />;
}

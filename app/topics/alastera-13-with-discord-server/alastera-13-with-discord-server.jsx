import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-with-discord-server');
}

export default function Alastera13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-with-discord-server" />;
}

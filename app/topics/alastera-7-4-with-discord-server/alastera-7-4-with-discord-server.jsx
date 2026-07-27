import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-with-discord-server');
}

export default function Alastera74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-with-discord-server" />;
}

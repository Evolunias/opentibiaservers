import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-with-discord-server');
}

export default function Alastera96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-with-discord-server" />;
}

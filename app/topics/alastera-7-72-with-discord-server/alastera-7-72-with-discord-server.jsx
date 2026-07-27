import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-with-discord-server');
}

export default function Alastera772WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-with-discord-server" />;
}

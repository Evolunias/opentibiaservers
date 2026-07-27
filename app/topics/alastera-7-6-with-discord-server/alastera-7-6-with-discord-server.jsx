import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-with-discord-server');
}

export default function Alastera76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-with-discord-server" />;
}

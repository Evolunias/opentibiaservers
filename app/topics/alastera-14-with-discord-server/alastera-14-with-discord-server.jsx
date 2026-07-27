import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-with-discord-server');
}

export default function Alastera14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-with-discord-server" />;
}

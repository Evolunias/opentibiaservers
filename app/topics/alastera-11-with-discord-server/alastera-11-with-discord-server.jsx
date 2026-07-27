import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-with-discord-server');
}

export default function Alastera11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-with-discord-server" />;
}

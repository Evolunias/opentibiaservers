import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-0-with-discord-server');
}

export default function Alastera80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-0-with-discord-server" />;
}

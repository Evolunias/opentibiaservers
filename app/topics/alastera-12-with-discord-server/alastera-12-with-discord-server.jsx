import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-with-discord-server');
}

export default function Alastera12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-with-discord-server" />;
}

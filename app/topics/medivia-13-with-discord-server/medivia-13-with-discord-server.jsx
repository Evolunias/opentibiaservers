import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-with-discord-server');
}

export default function Medivia13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-with-discord-server" />;
}

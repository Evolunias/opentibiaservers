import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-with-discord-server');
}

export default function Medivia96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-with-discord-server" />;
}

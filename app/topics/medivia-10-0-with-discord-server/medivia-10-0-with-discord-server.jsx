import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-with-discord-server');
}

export default function Medivia100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-with-discord-server" />;
}

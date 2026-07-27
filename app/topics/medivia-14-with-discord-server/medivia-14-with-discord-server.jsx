import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-with-discord-server');
}

export default function Medivia14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-with-discord-server" />;
}

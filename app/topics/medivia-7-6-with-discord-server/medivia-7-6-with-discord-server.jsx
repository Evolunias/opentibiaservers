import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-with-discord-server');
}

export default function Medivia76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-with-discord-server" />;
}

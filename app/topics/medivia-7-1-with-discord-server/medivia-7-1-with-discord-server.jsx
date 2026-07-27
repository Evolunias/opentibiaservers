import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-with-discord-server');
}

export default function Medivia71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-with-discord-server" />;
}

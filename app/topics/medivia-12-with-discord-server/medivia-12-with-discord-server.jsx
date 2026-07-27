import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-with-discord-server');
}

export default function Medivia12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-with-discord-server" />;
}

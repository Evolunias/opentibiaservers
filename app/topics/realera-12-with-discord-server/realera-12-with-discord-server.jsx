import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-with-discord-server');
}

export default function Realera12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="realera-12-with-discord-server" />;
}

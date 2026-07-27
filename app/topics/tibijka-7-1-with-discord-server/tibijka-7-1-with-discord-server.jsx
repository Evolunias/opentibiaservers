import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-with-discord-server');
}

export default function Tibijka71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-with-discord-server" />;
}

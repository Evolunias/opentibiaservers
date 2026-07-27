import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-with-discord-server');
}

export default function Evolera100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-with-discord-server" />;
}

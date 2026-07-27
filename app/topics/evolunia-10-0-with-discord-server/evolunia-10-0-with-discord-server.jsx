import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-with-discord-server');
}

export default function Evolunia100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-with-discord-server" />;
}

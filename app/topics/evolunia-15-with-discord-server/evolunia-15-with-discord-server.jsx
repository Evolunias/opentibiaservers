import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-with-discord-server');
}

export default function Evolunia15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-with-discord-server" />;
}

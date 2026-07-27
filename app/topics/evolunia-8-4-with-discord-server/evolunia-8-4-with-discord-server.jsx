import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-4-with-discord-server');
}

export default function Evolunia84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-4-with-discord-server" />;
}

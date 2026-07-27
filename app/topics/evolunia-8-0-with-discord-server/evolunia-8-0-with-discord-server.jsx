import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-0-with-discord-server');
}

export default function Evolunia80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-0-with-discord-server" />;
}

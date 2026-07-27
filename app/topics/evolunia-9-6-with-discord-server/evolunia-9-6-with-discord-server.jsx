import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-with-discord-server');
}

export default function Evolunia96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-with-discord-server" />;
}

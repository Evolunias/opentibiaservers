import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-with-discord-server');
}

export default function Evolunia14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-with-discord-server" />;
}

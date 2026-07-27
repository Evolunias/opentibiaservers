import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-with-discord-server');
}

export default function Evolunia81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-with-discord-server" />;
}

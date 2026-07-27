import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-with-discord-server');
}

export default function Evolunia71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-with-discord-server" />;
}

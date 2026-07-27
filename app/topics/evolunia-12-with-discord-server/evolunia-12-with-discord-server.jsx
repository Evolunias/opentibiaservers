import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-with-discord-server');
}

export default function Evolunia12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-with-discord-server" />;
}

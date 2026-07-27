import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-4-with-discord-server');
}

export default function MistOfDeath84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-4-with-discord-server" />;
}

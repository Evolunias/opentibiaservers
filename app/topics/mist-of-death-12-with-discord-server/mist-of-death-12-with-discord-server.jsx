import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-12-with-discord-server');
}

export default function MistOfDeath12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-12-with-discord-server" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-with-discord-server');
}

export default function MistOfDeath100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-with-discord-server" />;
}

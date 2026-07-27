import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-discord-server-sweden');
}

export default function MistOfDeathWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-discord-server-sweden" />;
}

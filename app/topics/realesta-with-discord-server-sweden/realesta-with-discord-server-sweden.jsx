import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-sweden');
}

export default function RealestaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-sweden" />;
}

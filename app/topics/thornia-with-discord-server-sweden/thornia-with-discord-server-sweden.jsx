import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-discord-server-sweden');
}

export default function ThorniaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-discord-server-sweden" />;
}

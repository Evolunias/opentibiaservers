import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-discord-server-sweden');
}

export default function CanobWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="canob-with-discord-server-sweden" />;
}

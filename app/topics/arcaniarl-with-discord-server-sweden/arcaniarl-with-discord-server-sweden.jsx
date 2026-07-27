import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-sweden');
}

export default function ArcaniarlWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-sweden" />;
}

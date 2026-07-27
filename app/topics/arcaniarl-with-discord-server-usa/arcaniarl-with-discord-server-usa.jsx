import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-usa');
}

export default function ArcaniarlWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-usa" />;
}

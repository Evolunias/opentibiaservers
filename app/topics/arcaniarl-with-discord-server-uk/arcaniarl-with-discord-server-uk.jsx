import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-uk');
}

export default function ArcaniarlWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-uk" />;
}

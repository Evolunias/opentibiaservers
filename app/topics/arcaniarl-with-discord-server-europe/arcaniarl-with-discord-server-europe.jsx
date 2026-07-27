import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-europe');
}

export default function ArcaniarlWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-europe" />;
}

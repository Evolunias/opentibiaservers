import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-poland');
}

export default function ArcaniarlWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-poland" />;
}

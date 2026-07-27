import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-germany');
}

export default function ArcaniarlWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-germany" />;
}

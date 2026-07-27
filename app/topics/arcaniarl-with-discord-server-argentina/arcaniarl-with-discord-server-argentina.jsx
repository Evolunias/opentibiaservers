import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-argentina');
}

export default function ArcaniarlWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-argentina" />;
}

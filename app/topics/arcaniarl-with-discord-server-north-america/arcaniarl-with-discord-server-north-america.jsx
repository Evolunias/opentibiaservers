import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-discord-server-north-america');
}

export default function ArcaniarlWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-discord-server-north-america" />;
}

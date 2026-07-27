import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-discord');
}

export default function OfficialArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-discord" />;
}

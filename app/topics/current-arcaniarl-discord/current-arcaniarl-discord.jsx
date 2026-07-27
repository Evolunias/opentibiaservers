import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-discord');
}

export default function CurrentArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-discord" />;
}

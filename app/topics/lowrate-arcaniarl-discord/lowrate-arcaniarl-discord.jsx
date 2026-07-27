import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-discord');
}

export default function LowrateArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-discord" />;
}

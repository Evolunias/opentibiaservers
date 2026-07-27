import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-discord');
}

export default function TopArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-discord" />;
}

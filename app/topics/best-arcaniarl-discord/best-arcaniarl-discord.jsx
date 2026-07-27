import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-discord');
}

export default function BestArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-discord" />;
}

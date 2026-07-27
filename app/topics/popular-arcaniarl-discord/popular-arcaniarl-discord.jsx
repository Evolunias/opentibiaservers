import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-discord');
}

export default function PopularArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-discord" />;
}

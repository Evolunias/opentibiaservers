import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-discord');
}

export default function FreshStartArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-discord" />;
}

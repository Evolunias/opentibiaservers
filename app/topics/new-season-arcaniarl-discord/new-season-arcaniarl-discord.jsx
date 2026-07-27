import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-discord');
}

export default function NewSeasonArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-discord" />;
}

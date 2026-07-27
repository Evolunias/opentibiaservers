import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nilot-discord');
}

export default function NewSeasonNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-nilot-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-canob-discord');
}

export default function NewSeasonCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-canob-discord" />;
}

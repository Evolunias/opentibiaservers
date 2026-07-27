import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-discord');
}

export default function NewSeasonOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-discord');
}

export default function NewSeasonTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-discord" />;
}

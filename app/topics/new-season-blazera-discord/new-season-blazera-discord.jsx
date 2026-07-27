import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-discord');
}

export default function NewSeasonBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-discord" />;
}

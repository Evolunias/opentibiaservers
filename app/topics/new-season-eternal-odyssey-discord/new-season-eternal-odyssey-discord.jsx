import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eternal-odyssey-discord');
}

export default function NewSeasonEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-eternal-odyssey-discord" />;
}

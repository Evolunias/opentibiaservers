import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-discord');
}

export default function NewSeasonMistOfDeathDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-discord" />;
}

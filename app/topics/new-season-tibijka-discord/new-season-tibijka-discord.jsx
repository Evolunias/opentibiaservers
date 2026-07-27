import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-discord');
}

export default function NewSeasonTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-discord" />;
}

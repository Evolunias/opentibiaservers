import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-discord');
}

export default function NewSeasonClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-discord');
}

export default function NewSeasonCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-discord" />;
}

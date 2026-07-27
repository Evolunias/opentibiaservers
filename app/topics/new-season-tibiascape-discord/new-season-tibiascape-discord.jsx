import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-discord');
}

export default function NewSeasonTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-discord" />;
}

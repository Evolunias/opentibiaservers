import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-aurera-global-discord');
}

export default function NewSeasonAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-aurera-global-discord" />;
}

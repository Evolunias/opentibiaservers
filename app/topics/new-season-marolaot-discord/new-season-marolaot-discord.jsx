import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-marolaot-discord');
}

export default function NewSeasonMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-marolaot-discord" />;
}

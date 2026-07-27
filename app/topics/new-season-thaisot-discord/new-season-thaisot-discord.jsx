import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-discord');
}

export default function NewSeasonThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-discord" />;
}

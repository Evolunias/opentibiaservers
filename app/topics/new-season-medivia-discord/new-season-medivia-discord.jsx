import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-discord');
}

export default function NewSeasonMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-discord" />;
}

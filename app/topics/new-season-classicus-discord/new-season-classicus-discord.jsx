import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-discord');
}

export default function NewSeasonClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-discord');
}

export default function NewSeasonThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-discord" />;
}

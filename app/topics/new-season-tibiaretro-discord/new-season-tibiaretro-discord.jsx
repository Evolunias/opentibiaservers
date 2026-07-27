import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-discord');
}

export default function NewSeasonTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-discord" />;
}

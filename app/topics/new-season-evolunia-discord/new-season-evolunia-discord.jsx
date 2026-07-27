import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-discord');
}

export default function NewSeasonEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-discord');
}

export default function NewSeasonNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-discord" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-discord');
}

export default function NewSeasonRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-discord" />;
}

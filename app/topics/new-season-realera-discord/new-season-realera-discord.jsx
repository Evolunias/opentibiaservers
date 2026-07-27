import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-discord');
}

export default function NewSeasonRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-discord" />;
}

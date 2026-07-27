import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-discord');
}

export default function NewSeasonNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-discord" />;
}

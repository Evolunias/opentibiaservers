import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-poland');
}

export default function WithDiscordSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-poland" />;
}

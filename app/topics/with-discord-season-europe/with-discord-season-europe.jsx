import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-europe');
}

export default function WithDiscordSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-europe" />;
}

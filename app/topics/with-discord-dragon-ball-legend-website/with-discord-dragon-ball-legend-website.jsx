import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend-website');
}

export default function WithDiscordDragonBallLegendWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend-website" />;
}

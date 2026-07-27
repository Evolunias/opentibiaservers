import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend');
}

export default function WithDiscordDragonBallLegendKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend" />;
}

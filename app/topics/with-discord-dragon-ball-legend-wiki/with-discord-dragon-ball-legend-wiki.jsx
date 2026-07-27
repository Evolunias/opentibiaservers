import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-dragon-ball-legend-wiki');
}

export default function WithDiscordDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-dragon-ball-legend-wiki" />;
}

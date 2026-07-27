import WithDiscordDragonBallLegendKeywordPage, { generateMetadata } from './with-discord-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordDragonBallLegendKeywordPage />;
}

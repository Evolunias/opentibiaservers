import DragonBallLegendQuestsKeywordPage, { generateMetadata } from './dragon-ball-legend-quests';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DragonBallLegendQuestsKeywordPage />;
}

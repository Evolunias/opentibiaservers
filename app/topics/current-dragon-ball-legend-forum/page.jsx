import CurrentDragonBallLegendForumKeywordPage, { generateMetadata } from './current-dragon-ball-legend-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDragonBallLegendForumKeywordPage />;
}

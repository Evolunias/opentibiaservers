import NewDragonBallLegendForumKeywordPage, { generateMetadata } from './new-dragon-ball-legend-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDragonBallLegendForumKeywordPage />;
}

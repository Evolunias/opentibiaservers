import ActiveDragonBallLegendForumKeywordPage, { generateMetadata } from './active-dragon-ball-legend-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDragonBallLegendForumKeywordPage />;
}

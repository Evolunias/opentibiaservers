import CustomDragonBallLegendForumKeywordPage, { generateMetadata } from './custom-dragon-ball-legend-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDragonBallLegendForumKeywordPage />;
}

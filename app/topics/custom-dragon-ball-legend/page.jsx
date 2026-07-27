import CustomDragonBallLegendKeywordPage, { generateMetadata } from './custom-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDragonBallLegendKeywordPage />;
}

import NoResetDragonBallLegendKeywordPage, { generateMetadata } from './no-reset-dragon-ball-legend';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDragonBallLegendKeywordPage />;
}

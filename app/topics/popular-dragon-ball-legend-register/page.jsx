import PopularDragonBallLegendRegisterKeywordPage, { generateMetadata } from './popular-dragon-ball-legend-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDragonBallLegendRegisterKeywordPage />;
}

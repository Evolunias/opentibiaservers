import Tibia14SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-14-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14SeasonalLaunchKeywordPage />;
}

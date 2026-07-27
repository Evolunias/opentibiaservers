import Tibia81SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-8-1-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81SeasonalLaunchKeywordPage />;
}

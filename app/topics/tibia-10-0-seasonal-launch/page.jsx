import Tibia100SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-10-0-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100SeasonalLaunchKeywordPage />;
}

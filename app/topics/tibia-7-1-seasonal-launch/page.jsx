import Tibia71SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-7-1-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71SeasonalLaunchKeywordPage />;
}

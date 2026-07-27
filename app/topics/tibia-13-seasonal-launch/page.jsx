import Tibia13SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-13-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13SeasonalLaunchKeywordPage />;
}

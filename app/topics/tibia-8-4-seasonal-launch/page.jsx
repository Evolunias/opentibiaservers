import Tibia84SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-8-4-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84SeasonalLaunchKeywordPage />;
}

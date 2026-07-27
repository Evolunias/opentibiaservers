import Tibia76SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-7-6-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76SeasonalLaunchKeywordPage />;
}

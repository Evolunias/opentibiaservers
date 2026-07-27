import Tibia15SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-15-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15SeasonalLaunchKeywordPage />;
}

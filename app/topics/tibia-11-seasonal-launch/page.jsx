import Tibia11SeasonalLaunchKeywordPage, { generateMetadata } from './tibia-11-seasonal-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11SeasonalLaunchKeywordPage />;
}

import SeasonalLaunchSouthAmericaKeywordPage, { generateMetadata } from './seasonal-launch-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchSouthAmericaKeywordPage />;
}

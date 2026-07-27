import SeasonalLaunchSwedenKeywordPage, { generateMetadata } from './seasonal-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalLaunchSwedenKeywordPage />;
}

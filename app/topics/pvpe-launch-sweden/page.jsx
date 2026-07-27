import PvpeLaunchSwedenKeywordPage, { generateMetadata } from './pvpe-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeLaunchSwedenKeywordPage />;
}

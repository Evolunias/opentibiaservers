import FreshStartLaunchSwedenKeywordPage, { generateMetadata } from './fresh-start-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLaunchSwedenKeywordPage />;
}

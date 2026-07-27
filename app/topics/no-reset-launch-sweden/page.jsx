import NoResetLaunchSwedenKeywordPage, { generateMetadata } from './no-reset-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLaunchSwedenKeywordPage />;
}

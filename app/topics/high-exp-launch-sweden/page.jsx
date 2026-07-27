import HighExpLaunchSwedenKeywordPage, { generateMetadata } from './high-exp-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpLaunchSwedenKeywordPage />;
}

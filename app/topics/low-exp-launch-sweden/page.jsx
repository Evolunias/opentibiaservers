import LowExpLaunchSwedenKeywordPage, { generateMetadata } from './low-exp-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpLaunchSwedenKeywordPage />;
}

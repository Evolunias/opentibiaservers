import BaiakLaunchSwedenKeywordPage, { generateMetadata } from './baiak-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakLaunchSwedenKeywordPage />;
}

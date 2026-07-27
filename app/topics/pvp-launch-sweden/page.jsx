import PvpLaunchSwedenKeywordPage, { generateMetadata } from './pvp-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpLaunchSwedenKeywordPage />;
}

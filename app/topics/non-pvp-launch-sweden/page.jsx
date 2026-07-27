import NonPvpLaunchSwedenKeywordPage, { generateMetadata } from './non-pvp-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpLaunchSwedenKeywordPage />;
}

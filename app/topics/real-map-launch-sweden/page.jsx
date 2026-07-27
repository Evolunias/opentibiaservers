import RealMapLaunchSwedenKeywordPage, { generateMetadata } from './real-map-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLaunchSwedenKeywordPage />;
}

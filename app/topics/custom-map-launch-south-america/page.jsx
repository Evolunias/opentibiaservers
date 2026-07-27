import CustomMapLaunchSouthAmericaKeywordPage, { generateMetadata } from './custom-map-launch-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapLaunchSouthAmericaKeywordPage />;
}

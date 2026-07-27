import OldSchoolLaunchSouthAmericaKeywordPage, { generateMetadata } from './old-school-launch-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchSouthAmericaKeywordPage />;
}

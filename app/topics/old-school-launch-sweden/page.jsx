import OldSchoolLaunchSwedenKeywordPage, { generateMetadata } from './old-school-launch-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchSwedenKeywordPage />;
}

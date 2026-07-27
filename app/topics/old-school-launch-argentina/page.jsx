import OldSchoolLaunchArgentinaKeywordPage, { generateMetadata } from './old-school-launch-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchArgentinaKeywordPage />;
}

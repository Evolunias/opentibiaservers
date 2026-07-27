import OldSchoolLaunchUsaKeywordPage, { generateMetadata } from './old-school-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchUsaKeywordPage />;
}

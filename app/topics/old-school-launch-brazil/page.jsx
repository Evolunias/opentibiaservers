import OldSchoolLaunchBrazilKeywordPage, { generateMetadata } from './old-school-launch-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchBrazilKeywordPage />;
}

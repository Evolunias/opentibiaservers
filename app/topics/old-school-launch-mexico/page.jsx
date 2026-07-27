import OldSchoolLaunchMexicoKeywordPage, { generateMetadata } from './old-school-launch-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchMexicoKeywordPage />;
}

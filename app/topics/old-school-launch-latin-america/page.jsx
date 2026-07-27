import OldSchoolLaunchLatinAmericaKeywordPage, { generateMetadata } from './old-school-launch-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchLatinAmericaKeywordPage />;
}

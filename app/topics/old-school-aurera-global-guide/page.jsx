import OldSchoolAureraGlobalGuideKeywordPage, { generateMetadata } from './old-school-aurera-global-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalGuideKeywordPage />;
}

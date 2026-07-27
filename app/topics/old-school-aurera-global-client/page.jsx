import OldSchoolAureraGlobalClientKeywordPage, { generateMetadata } from './old-school-aurera-global-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalClientKeywordPage />;
}

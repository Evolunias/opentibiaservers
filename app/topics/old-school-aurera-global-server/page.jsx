import OldSchoolAureraGlobalServerKeywordPage, { generateMetadata } from './old-school-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalServerKeywordPage />;
}

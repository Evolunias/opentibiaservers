import OldSchoolAureraGlobalLoginKeywordPage, { generateMetadata } from './old-school-aurera-global-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalLoginKeywordPage />;
}

import OldSchoolAureraGlobalKeywordPage, { generateMetadata } from './old-school-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalKeywordPage />;
}

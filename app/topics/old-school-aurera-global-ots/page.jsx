import OldSchoolAureraGlobalOtsKeywordPage, { generateMetadata } from './old-school-aurera-global-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalOtsKeywordPage />;
}

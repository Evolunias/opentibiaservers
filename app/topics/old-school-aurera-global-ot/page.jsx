import OldSchoolAureraGlobalOtKeywordPage, { generateMetadata } from './old-school-aurera-global-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalOtKeywordPage />;
}

import OldSchoolInfernalOtKeywordPage, { generateMetadata } from './old-school-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtKeywordPage />;
}

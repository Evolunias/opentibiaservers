import OldSchoolInfernalOtLoginKeywordPage, { generateMetadata } from './old-school-infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtLoginKeywordPage />;
}

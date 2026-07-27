import OldSchoolInfernalOtClientKeywordPage, { generateMetadata } from './old-school-infernal-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtClientKeywordPage />;
}

import OldSchoolHarmoniaOtClientKeywordPage, { generateMetadata } from './old-school-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtClientKeywordPage />;
}

import OldSchoolHarmoniaOtServerKeywordPage, { generateMetadata } from './old-school-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtServerKeywordPage />;
}

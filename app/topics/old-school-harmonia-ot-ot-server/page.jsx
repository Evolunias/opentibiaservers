import OldSchoolHarmoniaOtOtServerKeywordPage, { generateMetadata } from './old-school-harmonia-ot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtOtServerKeywordPage />;
}

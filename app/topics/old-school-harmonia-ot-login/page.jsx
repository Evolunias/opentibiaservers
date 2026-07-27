import OldSchoolHarmoniaOtLoginKeywordPage, { generateMetadata } from './old-school-harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtLoginKeywordPage />;
}

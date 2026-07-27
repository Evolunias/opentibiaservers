import OldSchoolHarmoniaOtOtKeywordPage, { generateMetadata } from './old-school-harmonia-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtOtKeywordPage />;
}

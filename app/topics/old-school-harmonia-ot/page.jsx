import OldSchoolHarmoniaOtKeywordPage, { generateMetadata } from './old-school-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtKeywordPage />;
}

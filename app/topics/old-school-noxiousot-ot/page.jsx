import OldSchoolNoxiousotOtKeywordPage, { generateMetadata } from './old-school-noxiousot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotOtKeywordPage />;
}

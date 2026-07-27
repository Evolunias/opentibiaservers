import OldSchoolNoxiousotOtServerKeywordPage, { generateMetadata } from './old-school-noxiousot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotOtServerKeywordPage />;
}

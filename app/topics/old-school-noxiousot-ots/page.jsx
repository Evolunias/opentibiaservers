import OldSchoolNoxiousotOtsKeywordPage, { generateMetadata } from './old-school-noxiousot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotOtsKeywordPage />;
}

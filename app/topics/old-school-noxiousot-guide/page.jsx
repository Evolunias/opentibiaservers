import OldSchoolNoxiousotGuideKeywordPage, { generateMetadata } from './old-school-noxiousot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotGuideKeywordPage />;
}

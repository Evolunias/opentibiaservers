import OldSchoolNoxiousotClientKeywordPage, { generateMetadata } from './old-school-noxiousot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotClientKeywordPage />;
}

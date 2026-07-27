import OldSchoolNoxiousotWebsiteKeywordPage, { generateMetadata } from './old-school-noxiousot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotWebsiteKeywordPage />;
}

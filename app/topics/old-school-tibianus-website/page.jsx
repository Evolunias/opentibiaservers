import OldSchoolTibianusWebsiteKeywordPage, { generateMetadata } from './old-school-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusWebsiteKeywordPage />;
}

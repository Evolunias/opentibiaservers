import OldSchoolDuraOnlineWebsiteKeywordPage, { generateMetadata } from './old-school-dura-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineWebsiteKeywordPage />;
}

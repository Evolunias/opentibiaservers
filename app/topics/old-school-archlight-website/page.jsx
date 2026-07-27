import OldSchoolArchlightWebsiteKeywordPage, { generateMetadata } from './old-school-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightWebsiteKeywordPage />;
}

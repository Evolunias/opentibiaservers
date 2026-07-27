import OldSchoolNtoStarWebsiteKeywordPage, { generateMetadata } from './old-school-nto-star-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarWebsiteKeywordPage />;
}

import OldSchoolClassickDrakoriaWebsiteKeywordPage, { generateMetadata } from './old-school-classick-drakoria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaWebsiteKeywordPage />;
}

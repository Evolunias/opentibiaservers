import OldSchoolRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './old-school-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRangerSArcaniWebsiteKeywordPage />;
}

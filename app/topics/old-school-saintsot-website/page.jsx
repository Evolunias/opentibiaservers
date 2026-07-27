import OldSchoolSaintsotWebsiteKeywordPage, { generateMetadata } from './old-school-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotWebsiteKeywordPage />;
}

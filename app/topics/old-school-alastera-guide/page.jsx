import OldSchoolAlasteraGuideKeywordPage, { generateMetadata } from './old-school-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraGuideKeywordPage />;
}

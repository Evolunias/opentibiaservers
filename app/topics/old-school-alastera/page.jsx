import OldSchoolAlasteraKeywordPage, { generateMetadata } from './old-school-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraKeywordPage />;
}

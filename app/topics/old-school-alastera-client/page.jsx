import OldSchoolAlasteraClientKeywordPage, { generateMetadata } from './old-school-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraClientKeywordPage />;
}

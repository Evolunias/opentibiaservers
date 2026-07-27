import OldSchoolAlasteraServerKeywordPage, { generateMetadata } from './old-school-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraServerKeywordPage />;
}

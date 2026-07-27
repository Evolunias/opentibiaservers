import OldSchoolAlasteraRegisterKeywordPage, { generateMetadata } from './old-school-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraRegisterKeywordPage />;
}

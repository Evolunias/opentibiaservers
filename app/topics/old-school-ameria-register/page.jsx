import OldSchoolAmeriaRegisterKeywordPage, { generateMetadata } from './old-school-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaRegisterKeywordPage />;
}

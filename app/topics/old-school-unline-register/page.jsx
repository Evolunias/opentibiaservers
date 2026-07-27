import OldSchoolUnlineRegisterKeywordPage, { generateMetadata } from './old-school-unline-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineRegisterKeywordPage />;
}

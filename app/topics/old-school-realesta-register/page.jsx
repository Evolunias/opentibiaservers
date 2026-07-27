import OldSchoolRealestaRegisterKeywordPage, { generateMetadata } from './old-school-realesta-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaRegisterKeywordPage />;
}

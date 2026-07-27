import OldSchoolSabrehavenRegisterKeywordPage, { generateMetadata } from './old-school-sabrehaven-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenRegisterKeywordPage />;
}

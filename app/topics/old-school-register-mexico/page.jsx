import OldSchoolRegisterMexicoKeywordPage, { generateMetadata } from './old-school-register-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterMexicoKeywordPage />;
}

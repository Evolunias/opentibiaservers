import OldSchoolRegisterCanadaKeywordPage, { generateMetadata } from './old-school-register-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterCanadaKeywordPage />;
}

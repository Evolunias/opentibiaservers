import OldSchoolRegisterUsaKeywordPage, { generateMetadata } from './old-school-register-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterUsaKeywordPage />;
}

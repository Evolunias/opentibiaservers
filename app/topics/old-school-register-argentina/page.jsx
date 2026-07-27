import OldSchoolRegisterArgentinaKeywordPage, { generateMetadata } from './old-school-register-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRegisterArgentinaKeywordPage />;
}
